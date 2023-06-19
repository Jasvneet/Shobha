
json.set! @product.id do
    json.extract! @product, :id, :name, :description, :price, :size, :category, :brand, :ingredients
end
