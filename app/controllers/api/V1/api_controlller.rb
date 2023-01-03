module Api
  module V1
    class ApiController < ActionController::API
      def not_found
        render json: { error: 'not_found' }
      end
    end
  end
end
