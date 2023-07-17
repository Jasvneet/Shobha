
json.products do 
    @products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :name, :price, :size, :category, :brand, :ingredients, :description
        json.photoUrl product.photo.attached? ? product.photo.url : nil
    end
    end
end

json.cartItems do 
    @cart_items.each do |cart_item|
        json.set! cart_item.id do 
            json.extract! cart_item, :product_id, :quantity, :id
        end
    end
end 