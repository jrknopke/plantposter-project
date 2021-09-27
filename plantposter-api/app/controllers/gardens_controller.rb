class GardensController < ApplicationController

    def index 
        gardens = Garden.all
        render json: gardens.to_json(:include => :plants)
    end
    
end
