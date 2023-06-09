class Api::CartItemsController < ApplicationController
    def index
        @cart_items = CartItem.all
        render :index
    end


    
    def create
        @cart_item = CartItem.find_by(user_id: current_user.id, product_id: cart_item_params[:product_id])
      
        if @cart_item
          @cart_item.quantity += 1
          if @cart_item.save
            render :show
          else
            render json: @cart_item.errors.full_messages, status: 422
          end
        else
          @cart_item = CartItem.new(cart_item_params)
          @cart_item.user_id = current_user.id
          if @cart_item.save
            render :show
          else
            render json: @cart_item.errors.full_messages, status: 422
          end
        end
      end
      
    
    def update
        @cart_item = CartItem.find_by(id: params[:id])
        if @cart_item.update(cart_item_params)
        render :show
        else
        render json: @cart_item.errors.full_messages, status: 422
        end
    end
    
    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        @cart_item.destroy
        render :show
    end
    
    private
    
    def cart_item_params
        params.require(:cart_item).permit(:id, :product_id, :quantity, :user_id)
    end
end
