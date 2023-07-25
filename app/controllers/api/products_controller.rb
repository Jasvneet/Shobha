class Api::ProductsController < ApplicationController
  def search
    @products = Product.search(params[:query])
    puts "Search Query: #{params[:query]}"
    puts "Search Results: #{@products.inspect}" 
    render :search
  end

  def brand
    @products = Product.where(brand: params[:brand])
    render :brand
  end

  def category
    categories = params[:category].split(',') 

    product_ids = nil
    categories.each do |category|
      category_products = Product.where('category LIKE ?', "%#{category}%").pluck(:id)
      product_ids = product_ids.nil? ? category_products : product_ids & category_products
    end
    @products = Product.where(id: product_ids)
    render :category
  end

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
    product_ids = @cart_items.pluck(:product_id).uniq 

    @products = Product.where(id: product_ids) # Fetch products with matching IDs

    render :cart_items
  end

  def loves 
    @loves = current_user.loves
    love_ids = @loves.pluck(id: love_ids)

    @loves = Love.where(id: love_ids)

    render :loves

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
    categories = params[:category].split(',') 

    product_ids = nil
    categories.each do |category|
      category_products = Product.where('category LIKE ?', "%#{category}%").pluck(:id)
      product_ids = product_ids.nil? ? category_products : product_ids & category_products
    end
    @products = Product.where(id: product_ids)
    render :category
  end

end

 
