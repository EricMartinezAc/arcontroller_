function Reloj() {

    setInterval(() => {
        new Date().toLocaleTimeString()
    }, 1000);
}

Reloj()

module.exports.Reloj