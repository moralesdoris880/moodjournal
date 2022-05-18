class PagesController < ApplicationController
    wrap_parameters format:[]
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity

    def index
        user = User.find_by(id:session[:user_id])
        if user
            render json: Page.all, status: :created
        else
            render json: {errors: ['Not found']}, status: :unauthorized
        end
    end

    def user_entries
        user = User.find_by(id:session[:user_id])
        if user
            render json: user.pages, status: :accepted
        else
            render json: {errors: ['No User Pages found']}, status: :unauthorized
        end
    end

    def show
        user = User.find_by(id:session[:user_id])
        if user
            render json: user.pages.find_by(id: params[:id]), status: :accepted
        else
            render json: {errors: ['User Page not found']}, status: :unauthorized
        end
    end

    def create
        user = User.find_by(id:session[:user_id])
        if user
            page = user.pages.create!(page_params)
            render json: page
        else
            render json: {errors: ["Page was not created"]}, status: :unauthorized
        end
    end

    def update
        user =  User.find_by(id: session[:user_id])
        page = user.pages.find_by(id: params[:id])
        if page
            page.update(page_params)
            render json: page, status: :accepted
        else
            render json: {error: 'Page was not updated'}, status: :not_found
        end
    end

    def destroy
        user =  User.find_by(id: session[:user_id])
        page = user.pages.find_by(id: params[:id])
        if page
            page.destroy
            render json: {}
        else
            render json: {error: 'Page Not Found'}, status: :not_found
        end
    end

    private

    def page_params
        params.permit(:mood,:body) 
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: ["Incorrect"]}, status: :unprocessable_entity
    end
end
