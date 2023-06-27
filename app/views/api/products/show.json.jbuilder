json.product do 
    json.extract! @product, :id, :name, :price, :size, :category, :brand, :ingredients, :description, :how_to_use, :other_info, :callouts
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
end 
    
json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :title, :body, :product_id, :id, :user_id, :created_at
        end
    end
end    