class Api::ProductsController < ApplicationController
  def index
    @products = Product.all
    render :index
  end

  def show
    @product = Product.find_by(id: params[:id])
    response.headers['Content-Disposition'] = 'inline'
    render :show
  end 

  def cart_items
    @cart_items = current_user.cart_items # Fetch all cart items
    product_ids = @cart_items.pluck(:product_id).uniq # Get unique product IDs from cart items

    @products = Product.where(id: product_ids) # Fetch products with matching IDs

    render :cart_items
  end

  def search
    @products = Product.search(params[:query])
    puts "Search Query: #{params[:query]}" # Add this line to debug the query
    puts "Search Results: #{@products.inspect}" # Add this line to debug the search results
    render :search
  end

  def brand
    @products = Product.where(brand: params[:brand])
    render :brand
  end

  def category
    @category = params[:category]
    @products = Product.where(category: @category)
    render :category
  end

end

 
