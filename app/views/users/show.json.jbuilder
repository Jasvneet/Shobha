json.user do 
    json.extract! @user, :id, :firstname, :lastname, :created_at
end 

#Set example 
#@users.each do |user|
   # @json.set! user.id do 
    #    json.extract! user, :firstname, :lastname, 
   # end 
#end 