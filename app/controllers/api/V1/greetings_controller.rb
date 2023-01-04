class Api::V1::GreetingsController < ApplicationController
  def index
    message = Greeting.order(Arel.sql('RANDOM()')).first
    render json: { status: 'SUCCESS', message: 'Random message generated', data: message }, status: :ok
  end
end
