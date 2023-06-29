json.product do 
    json.extract! @product, :id, :name, :price, :size, :category, :brand, :ingredients, :description, :how_to_use, :other_info, :callouts, :fragrance
    json.photoUrl @product.photo.attached? ? @product.photo.url : nil
    json.loves @product.loves
end 
    
json.reviews do
    @product.reviews.each do |review|
        json.set! review.id do
            json.extract! review, :rating, :title, :body, :product_id, :id, :user_id, :created_at
        end
    end
end   

json.loves do
    @product.loves.each do |love|
        json.set! love.id do
            json.extract! love, :id, :product_id, :user_id, :created_at
        end
    end
end    