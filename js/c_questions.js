(function() {
  $(function() {

    var cQuestions = $('.c_questions');

    cQuestions.on('click', '.c_questions__link', function(e) {
      var a = e.target;
      $(a).parent().toggleClass('c_questions--opened');
      e.preventDefault();
    });

  });
}());
