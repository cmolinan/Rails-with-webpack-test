class Api::V1::GreetingsController < ApplicationController
  def index
    message = Greeting.order(Arel.sql('RANDOM()')).first.message
    # debugger
    # render json: { status: 'SUCCESS', message: 'Random message generated', data: message }, status: :ok
    render json: { message: }
  end
end
