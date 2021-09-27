class GardenersController < ApplicationController

    def index 
        gardeners = Gardener.all
        render json: gardeners.to_json(:include => :gardens)
    end

end
