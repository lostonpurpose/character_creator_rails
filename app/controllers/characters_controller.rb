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

  def destroy
    @character = Character.find(params[:id])
    @character.destroy
    redirect_to characters_path, status: :see_other
  end

  private

  def character_params
    params.require(:character).permit(:name, :age, :job, :race, :gender)
  end

end
