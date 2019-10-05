const express = require('express');
const router = express.Router();
const uuid = require('uuid');
const {getTokens, setToken, getUsersOnName, getUsersOnId} = require("../repository/repository");

// время жизни токена
const addTimeLife = (date, min) => {
    return new Date(date.getTime() + min * 60000)
};
// проверяем на авторизацию
const authMiddleware = async (req, res, next) => {
    if (!req.headers['token']) {
        res.sendStatus(403);
        return;
    }
    const token = req.headers['token'];
    let result = await getTokens(token);
    if (!result.length) {
        res.sendStatus(403);
        return;
    }
    if (result[0].ExpiredAt < new Date()) {
        res.sendStatus(403);
        return;
    }
    next();
};

router.use((req, res, next) => {
    console.log(`Time: ${Date.now()}`);
    next()
});

// настраиваем пути запросов
router.get('/users', authMiddleware, async (req, res) => {
    let results = await getUsersOnId();
    res.send(results);
});

router.post('/auth/login', async (req, res) => {
    try {
        let results = await getUsersOnName(req.body.login);
        if (!results.length) {
            res.sendStatus(401);
            return;
        }
        let user = results[0];
        if (user.password !== req.body.password) {
            res.sendStatus(401);
            return;
        }
        let token = uuid();
        let expiredAt = addTimeLife(new Date(), 15);
        await setToken(token, user.id, expiredAt);
        res.send({token})
    } catch (err) {
        res.sendStatus(500)
    }
});


module.exports = router;