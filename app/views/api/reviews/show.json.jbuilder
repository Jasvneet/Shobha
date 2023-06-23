json.review do
    json.extract! @review, :id, :rating, :title, :body, :product_id, :user_id, :created_at
end