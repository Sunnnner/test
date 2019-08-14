var app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue'
    }
});

var app2 = new Vue({
    el: '#app2',
    data: {
        message:'帮助信息' + new Date().toLocaleDateString()
    }
});