document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- Font Awesome -->
<link
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
rel="stylesheet"
/>
<!-- Google Fonts -->
<link
href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
rel="stylesheet"
/>
<!-- MDB -->
<link
href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.css"
rel="stylesheet"
/>
<!-- MDB -->
<script
  type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.0/mdb.min.js"
></script>
<link rel="stylesheet" href="nav.css">
</head>
<body>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand fw-bold" href="#">
        <img src="images/logo.jpg" width="50px" height="50px" alt="">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item mx-2">
            <a class="nav-link " aria-current="page" href="#">New $ Featured</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">Men</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="#">women</a>
          </li>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2">kids</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">Sale</a>
          </li>
          <li class="nav-item">
            <a class="nav-link mx-2" href="#">SNKRS</a>
          </li>
        </ul>
        
          <input class=" btn-outline-dark fw-bold"  type="text" placeholder="Serach...">
        
      </div>
    </div>
  </nav>
  
</body>
</html>`)