
json.user do 
    json.extract! @user, :id, :email, :firstname, :lastname, :created_at
end 

