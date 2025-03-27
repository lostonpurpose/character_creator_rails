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

  def create
    @character = Character.new(character_params)
    if @character.save
      redirect_to character_path(@character)
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def update_strength
    @character = Character.find(params[:id])
  
    # Parse the incoming JSON data from the request body
    strength = JSON.parse(request.body.read)["strength"]
  
    if @character.update(strength: strength)
      render json: { status: 'success', strength: @character.strength }
    else
      render json: { status: 'error', message: 'Failed to update strength' }
    end
  end

  def destroy
    @character = Character.find(params[:id])
    @character.destroy
    redirect_to characters_path, status: :see_other
  end

  private

  def character_params
    params.require(:character).permit(:name, :age, :job, :race, :gender, :strength)
  end

end
