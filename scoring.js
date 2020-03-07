$(document).ready(function(){
  function score_indicate(){
    // このような記述をすることで、subject_pointsという変数の中に
    // [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]という配列を作成できる。
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // さらにこのような記述をすることで、「合計点：」となっている右の部分に合計点が出力される
    let sum = subject_points.reduce(function(x, y){
      return x + y;
    });

    $('#sum_indicate').text(sum);

    // ここに、上記を参考にして平均点を出力する処理を書き込む
    let average = sum / subject_points.length
    $('#average_indicate').text(average);
    return subject_points;
  };



  function get_achievement(){
    $('.btn-primary').click(function(){
      let averageForEvaluation = Number($('#average_indicate').text());
      let evaluation = $('#evaluation');
      if(averageForEvaluation >= 80){
        return evaluation.text('A');
      } else if (averageForEvaluation >= 60) {
        return evaluation.text('B');
      } else if (averageForEvaluation >= 40) {
        return evaluation.text('C');
      } else {
        return evaluation.text('D');
      };
    })
  };

  function get_pass_or_failure(){
    $('.btn-success').click(function(){
      let judge = $('#judge');
      let score = score_indicate();
      for (let i = 0; i < score.length; i++){
        if (score[i] < 60){
           judge.text('不合格');
        } else {
           judge.text('合格');
        };
      };
    })
  };

    // ここに、全ての教科が60点以上なら"合格"の文字列、一つでも60点未満の教科があったら"不合格"の文字列を出す処理を書き込む

  function judgement(){
    // ここに、「最終ジャッジ」のボタンを押したら「あなたの成績はAです。合格です」といった内容を出力する処理を書き込む
    // 下記の記述をすることで、「最終ジャッジ」のボタンを押すと「あなたの成績は（ここに「ランク」の値を入れる）です。（ここに「判定」の値を入れる）です」という文字の入った水色のフキダシが出力される処理が実装される。
    let judgementDeclaration = (`<label id="alert-indicate" class="alert alert-info">あなたの成績は${$('#evaluation').text()}です。${$('#judge').text()}です</label>`)
    $('#declaration').append(judgementDeclaration);
  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  $('#btn-evaluation').click(function() {
    get_achievement();
  });
  $('#btn-judge').click(function() {
    get_pass_or_failure();
  });
  $('#btn-declaration').click(function() {
    $('#alert-indicate').remove();
    judgement();
  });
});


// ここに書かれているjsの記述はあくまでヒントとして用意された雛形なので、書かれている記述に従わずに実装したいという場合は、自分の好きに実装して構わない。課題要件を満たし、コードの品質が一定の水準にあると判定されればどのような実装でも合格になる。
// 例ではJavaScriptとJqueryの両方の記述を使用しているが、どちらかに統一しても構わない
