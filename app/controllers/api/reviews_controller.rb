class Api::ReviewsController < ApplicationController

    def index 
        @reviews = Review.where(product_id: params[:product_id])
        render :index 
    end 

    def create
      
        @review = Review.new(review_params)
        @review.user_id = current_user.id
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find_by(id: params[:id])
        render :show
    end 

    def update
        @review = Review.find_by(id: params[:id])

        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def destroy
        @review = Review.find_by(id: params[:id])
        @review.destroy
        render :show
    end

    def review_params
        params.require(:review).permit(:product_id, :title, :rating, :body, :user_id)
    end
end


