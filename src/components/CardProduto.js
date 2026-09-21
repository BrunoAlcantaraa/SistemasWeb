function CardProduto({ produto }) {
    const { nome, imagem, detalhes = [], preco } = produto;

    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-3/5 bg-zinc-100 flex items-center justify-center p-6">
                <img src={imagem} alt={nome} className="w-full max-h-96 object-contain" />
            </div>

            <div className="md:w-2/5 p-8 flex flex-col justify-center gap-4">
                <h3 className="text-3xl font-bold text-zinc-900">{nome}</h3>

                <dl className="space-y-2 text-zinc-700">
                    {detalhes.map(({ label, valor }) => (
                        <div key={label} className="flex justify-between border-b border-zinc-200 pb-2">
                            <dt className="font-medium">{label}</dt>
                            <dd>{valor}</dd>
                        </div>
                    ))}
                </dl>

                <p className="text-3xl font-extrabold text-blue-600">
                    {preco != null
                        ? preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                        : 'Sob consulta'}
                </p>
            </div>
        </div>
    );
}

export default CardProduto;
