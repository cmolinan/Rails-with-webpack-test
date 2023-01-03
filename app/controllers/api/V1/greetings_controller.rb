module Api
  module V1
    def index
      message = Greeting.order(Arel.sql('RANDOM()')).first      
      render json: { status: 'SUCCESS', message: 'Random message generated', data: message }, status: :ok
    end
  end
end
