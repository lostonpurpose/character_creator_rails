class CharacterController < ApplicationController

  def index
    @characters = Character.all
  end
  def show
    @character = Character.find(params[:id])
  end
end
