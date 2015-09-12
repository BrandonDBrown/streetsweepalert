class PagesController < ApplicationController
  def home
        if current_user
            redirect_to current_user
        else
            redirect_to root_path #or whatever
        end
  end
end
