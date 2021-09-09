class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants.to_json
    end

end
