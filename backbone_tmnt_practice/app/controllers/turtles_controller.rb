class TurtlesController < ApplicationController
  def index
    @turtles = Turtle.all
    respond_to do |format|
      format.html
      format.json { render json: @turtles }
    end
  end
end