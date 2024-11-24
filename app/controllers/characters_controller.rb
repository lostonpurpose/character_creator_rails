class CharactersController < ApplicationController

  def index
    @character = Character.new
    @characters = Character.all
  end

  def show
    @character = Character.find(params[:id])
  end

  def new
    @character = Character.new
  end

end
