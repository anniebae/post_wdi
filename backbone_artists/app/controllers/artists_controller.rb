class ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    respond_to do |format|
      format.html
      format.json { render json: @artists}
    end
  end

  def create
    artist = Artist.create(artist_params)
    render json: artist
  end

  def update
    artist = Artist.find(params[:id])
    artist.update(artist_params)
    render json: artist
  end

  private
  def artist_params
    params.require(:artist).permit(:name, :age, :style, :image_url)
  end
end