export default function Footer() {
  return (
    <div>
      <footer className="bg-light text-center text-lg-start mt-4">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">About Us</h5>
              <p className="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Quisque interdum quam odio, quis placerat ante luctus eu.
              </p>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Quick Links</h5>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#" className="text-muted text-decoration-none">Home</a>
                </li>
                <li>
                  <a href="#products" className="text-muted text-decoration-none">Products</a>
                </li>
                <li>
                  <a href="#about" className="text-muted text-decoration-none">About</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Contact</h5>
              <ul className="list-unstyled mb-0">
                <li className="text-muted">
                  <small>Email: info@example.com</small>
                </li>
                <li className="text-muted">
                  <small>Phone: +1 123 456 7890</small>
                </li>
                <li className="text-muted">
                  <small>Address: 123 Street, City, Country</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center p-3 bg-dark text-white">
          <small>© 2025 Copyright: <a href="#" className="text-white">MyWebsite.com</a></small>
        </div>
      </footer>
    </div>
  )
}