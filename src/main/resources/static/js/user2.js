   $("#login").submit(function (event) {
    event.preventDefault();
    let user = {
    email: $("#email").val(),
    password: $("#password").val(),

};


  $.ajax({
    type: "Get",
    url: "/user/login",
    contentType: "application/json",
    data: $("email").val()+"/"+$("password").val(),# JSON.stringify(user),
    success: function (user) {
    alert("user saved successfully!");

},

  error: function (error) {
    console.log("Error saving person: ", error);
}
});
