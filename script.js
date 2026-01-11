const app = document.querySelector(".app");

function changeTheme() {
    app.className = "app " + document.getElementById("champion").value;
}

function calculate() {
    const ad = Number(document.getElementById("ad").value);
    const ap = Number(document.getElementById("ap").value);
    const critChance = Number(document.getElementById("critChance").value) / 100;
    const critDamage = Number(document.getElementById("critDamage").value) / 100;

    const averageCritMultiplier = 1 + critChance * (critDamage - 1);
    const totalADDamage = Math.round(ad * averageCritMultiplier);
    const totalAPDamage = Math.round(ap * 1.0);

    document.getElementById("result").innerHTML = `
        🗡️ Ortalama AD Hasarı: <b>${totalADDamage}</b><br>
        🔮 AP Hasarı: <b>${totalAPDamage}</b><br>
        💥 Kritik Etkisi: <b>x${averageCritMultiplier.toFixed(2)}</b>
    `;
}
