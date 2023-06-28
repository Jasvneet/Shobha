class Api::LovesController < ApplicationController
    def index 
        @loves = current_user.loves
        render :index
    end 

    def create 
    

        @love = Love.new(love_params)
        @love.user_id = current_user.id
        if @love.save
            render :show
        else 
            render json: @love.errors.full_messages, status: 422
        end 
    end 

    def destroy 
        @love = Love.find_by(id: params[:id])
        @love.destroy
        render :show
    end 

    def love_params 
        params.require(:like).permit(:product_id, :user_id, :id)
    end 
end
