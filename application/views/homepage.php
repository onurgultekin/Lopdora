<!DOCTYPE html>
<html>
<head>
	<title>Lopdora | Homepage</title>
	<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="css/mapbox.css">
	<link rel="stylesheet" type="text/css" href="css/mapbox.zoomslider.css">
	<link rel="stylesheet" type="text/css" href="css/animate.css">
	<link rel="stylesheet" type="text/css" href="css/font-awesome.css">
	<link rel="stylesheet" type="text/css" href="css/styles.css">
	<script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
	<script type="text/javascript" src="js/bootstrap.min.js"></script>
	<script type="text/javascript" src="js/mapbox.js"></script>
	<script type="text/javascript" src="js/mapbox.zoomslider.js"></script>
	<script type="text/javascript" src="js/functions.js"></script>
	<script type="text/javascript" src="js/homepage.js"></script>
</head>
<body>
	<nav class="navbar navbar-custom navbar-fixed-top" role="navigation">
		<div class="container-fluid">
			<div class="navbar-header page-scroll">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
					<i class="fa fa-bars"></i>
				</button>
			</div>
			<div class="collapse navbar-collapse navbar-right navbar-main-collapse">
				<ul class="nav navbar-nav">
					<li class="active"><a href="#intro">Home</a></li>
					<li class=""><a href="#about">About</a></li>
					<li><a href="#service">Service</a></li>
					<li><a href="#contact">Contact</a></li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#">Example menu</a></li>
							<li><a href="#">Example menu</a></li>
							<li><a href="#">Example menu</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
	<div id="map"></div>
	<div class="col-md-4 mapSearch">
		<h4 style="font-size:32px;">Welcome to Lopdora</h4>
		<form name="sentMessage" id="contactForm">
			<div class="row control-group">
				<div class="form-group col-xs-12 floating-label-form-group controls">
					<label>Choose a country</label>
					<input type="text" class="form-control" placeholder="Choose a country" id="country" data-validation-required-message="Please choose a city." aria-invalid="false">
					<p class="help-block text-danger"></p>
					<div class="countryList">
						<ul></ul>
					</div>
				</div>
			</div>
			<div class="row control-group">
				<div class="form-group col-xs-12 floating-label-form-group controls">
					<label>Choose a city</label>
					<input type="text" class="form-control" placeholder="Choose a city" id="city" data-validation-required-message="Please choose a city." aria-invalid="false">
					<p class="help-block text-danger"></p>
					<div class="cityList">
						<ul></ul>
					</div>
				</div>
			</div>
			<div class="row control-group">
				<div class="form-group col-xs-12 floating-label-form-group controls">
					<label>Choose a gender</label>
					<input type="text" class="form-control" placeholder="Choose a gender" id="email"  data-validation-required-message="Please choose a gender.">
					<p class="help-block text-danger"></p>
				</div>
			</div>
			<br>
			<div id="success"></div>
			<div class="row">
				<div class="form-group col-xs-12">
					<button type="submit" class="btn btn-success btn-lg pull-right">Search Homemate</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>