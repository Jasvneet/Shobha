@products.each do |product|
  json.set! product.id do
    json.extract! product, :id, :name, :price, :size, :category, :brand, :ingredients, :description
    json.photoUrl product.photo.attached? ? product.photo.url : nil
  end
end