const timer = () => {
    const DATE_ = new Date();

    const HOUR = String(DATE_.getHours()).padStart(2, '0');
    const MIN = String(DATE_.getMinutes()).padStart(2, '0');
    const SEC = String(DATE_.getSeconds()).padStart(2, '0');

    const HOUR_A = Number(HOUR);
    const MIN_B = Number(MIN);
    const SEC_C = Number(SEC);

    const TWO_HOUR = HOUR_A.toString(2);
    const TWO_MIN = MIN_B.toString(2);
    const TWO_SEC = SEC_C.toString(2);

    const TIME_A =  TWO_HOUR.padStart(5, '0');
    const TIME_B = TWO_MIN.padStart(6, '0');
    const TIME_C = TWO_SEC.padStart(6, '0');

    let timeex = `現在の時刻は<br>${TIME_A}時${TIME_B}分${TIME_C}秒<br>です`;

    const ALERT_ = document.getElementById('time_');

    ALERT_.innerHTML = timeex;
}

setInterval(timer, 1000);