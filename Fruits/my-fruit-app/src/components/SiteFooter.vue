<template>
    <footer class="bg-dark text-white py-4">
      <div class="container">
        <div class="row">
          <!-- Company Information -->
          <div class="col-md-4">
            <h5>About Us</h5>
            <p>
              Welcome to Fruitables! We are committed to providing you with the freshest fruits and vegetables, delivered right to your doorstep.
            </p>
            <p>
              Our mission is to promote healthy living by making fresh produce easily accessible to everyone.
            </p>
          </div>
  
          <!-- Contact Information -->
          <div class="col-md-4">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li><strong>Email:</strong> mikail.alam81@gmail.com</li>
              <li><strong>Phone:</strong> 346-626-0018</li>
              <li><strong>Company:</strong> Arthur Lawrence</li>
              <li><strong>Location:</strong> Sugar Land, TX</li>
            </ul>
          </div>
  
          <!-- Social Media Links -->
          <div class="col-md-4">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#" class="text-white">
                  <i class="fab fa-facebook fa-lg"></i> Facebook
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  <i class="fab fa-twitter fa-lg"></i> Twitter
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  <i class="fab fa-instagram fa-lg"></i> Instagram
                </a>
              </li>
              <li>
                <a href="#" class="text-white">
                  <i class="fab fa-linkedin fa-lg"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <div class="text-center mt-3">
          <p>&copy; 2024 Fruitables. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </template>
  
  <script>
    export default {
      name: 'SiteFooter',
    };
</script>
  
  <style scoped>
  footer {
    background-color: #343a40;
    color: white;
    padding: 40px 0;
}

footer h5 {
    margin-bottom: 20px;
    font-weight: bold;
}

footer p, footer li {
    font-size: 14px;
    line-height: 1.6;
}

footer a {
    color: #ffc107; 
    text-decoration: none;
}

footer a:hover {
    color: #ffffff; 
}

  </style>
  