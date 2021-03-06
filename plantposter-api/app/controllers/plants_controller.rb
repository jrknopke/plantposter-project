class PlantsController < ApplicationController

    def index
        plants = Plant.all
        render json: plants.to_json
    end

    def show
        plant = Plant.find(params[:id])
        render json: plant 
    end

    def create
        plant = Plant.create(plant_params)
        render json: plant
    end

    def update
        plant = Plant.find(params[:id])
        plant.update_attributes(plant_params)
        render json: plant
    end

    def destroy
        plant = Plant.find(params[:id])
        plant.destroy
        # 
    end

    private
        def plant_params
            params.require(:plant).permit(:name, :family, :color)
        end
    
end
