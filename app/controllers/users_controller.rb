class UsersController < ApplicationController
    before_action :logged_in_user, only: [:show, :create, :new]
    before_action :correct_user,   only: [:show]

  def show
    @user = User.find(params[:id])
  end
    
  def new
  end
    
  def create
  end
    
    private
    
# Confirms the correct user.
    def correct_user
      @user = User.find(params[:id])
      redirect_to(root_url) unless current_user?(@user)
    end
end
