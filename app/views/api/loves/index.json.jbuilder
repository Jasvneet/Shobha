@loves.each do |love|
    json.set! love.id do 
        json.extract! love, :user_id, :product_id, :id, :created_at
    end
end