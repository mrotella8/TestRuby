class TestBancosController < ApplicationController
  before_action :set_test_banco, only: [:show]

  # GET /test_bancos
  # GET /test_bancos.json
  def index
    @test_bancos = TestBanco.all
  end

  # GET /test_bancos/1
  # GET /test_bancos/1.json
  def show
    redirect_to @test_banco.link
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_test_banco
      @test_banco = TestBanco.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def test_banco_params
      params.require(:test_banco).permit(:nome, :link)
    end
end
