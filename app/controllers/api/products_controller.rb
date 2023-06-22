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

  def search
    @products = Product.search(params[:query])
    puts "Search Query: #{params[:query]}" # Add this line to debug the query
    puts "Search Results: #{@products.inspect}" # Add this line to debug the search results
    render :search
  end
end

 
