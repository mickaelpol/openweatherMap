$.ajax({

	url:"http://api.openweathermap.org/data/2.5/forecast?id={6447020}&APPID=a46b3c46d72e846fc8c834a487a2b41d",
	
	success:function(data){

	},
	erreur:function(data){
		$('#jour1').html("Erreur!");
		$('#jour2').html("Erreur!");
		$('#jour3').html("Erreur!");
	}
});


"<img src='http://openweathermap.org/img/w/" + data.list[12].weather[0].icon + ".png'>";