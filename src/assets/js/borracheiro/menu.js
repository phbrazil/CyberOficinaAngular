function changeType(button) {
    var t = document.getElementById('tire');
    var w = document.getElementById('wheel');
    var b = document.getElementById('both');
    var u = document.getElementById('unknown');
    var option = document.getElementById('option');
    option.value = button;

    var submit = document.getElementById('submit');
    submit.classList.remove("disabled");

    $('#submit').prop('disabled', false);

    if (button === 'tire') {
        t.classList.remove("disabled");
        w.classList.add("disabled");
        b.classList.add("disabled");
        u.classList.add("disabled");
        
    } else if (button === 'wheel') {
        w.classList.remove("disabled");
        t.classList.add("disabled");
        b.classList.add("disabled");
        u.classList.add("disabled");
    } else if (button === 'both') {
        b.classList.remove("disabled");
        w.classList.add("disabled");
        t.classList.add("disabled");
        u.classList.add("disabled");
    } else if (button === 'unknown') {
        u.classList.remove("disabled");
        w.classList.add("disabled");
        t.classList.add("disabled");
        b.classList.add("disabled");

    }

}