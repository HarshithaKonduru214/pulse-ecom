import { FaStar, FaTimes } from "react-icons/fa"
const Horizontal = () => {
    return (
        <div>
            <div class="card-container box-shadow horizontal-card">
  <div class="card-header flex-row mb-2 mt-2">
      <div class="card-image-container p-1">
          <img class="card-image image-no-border" src="https://pulse-fragrances.netlify.app/images/perfume.jpg" alt="image" />
      </div>
      <div class="card-content-container p-2 flex-column justify-content-between">
          <div class="card-heading-container">
              <div class="card-heading">Versace Pour Homme Eau De Toilette(100ml)
              </div>
              <div class="card-content justify-content-between">
                  <div class="card-rating flex-row gap">
                      <div class="card-rating-value">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                      <div class="card-rating-number">4.3 / 5</div>
                  </div>    
              </div>
          </div>                                  
          <div class="card-footer flex-row justify-content-between container">
              <div class="card-qty flex-row">
                  <div class="card-qty-content align-self-center">Quantity: 1</div>
                  <div class="card-qty-icon align-self-center"><i class="fas fa-angle-down"></i></div>
              </div>
              <div class="card-button card-wishlish secondary-button">MOVE TO WISHLIST</div>
          </div>
      </div>    
  </div>
</div>
        </div>
    )
}

export { Horizontal }