    var subject = "자바스크립트"
    if (subject) {
        var subject = "리액트"
        console.log('if문 안쪽 스코프', subject)
    }
    console.log('if문 바깥 스코프', subject)
