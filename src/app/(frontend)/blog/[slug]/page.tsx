type Props = {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params

  return (
    <div className="container mx-auto px-4 py-12">
      {/* TODO: content */}
      <h1 className="text-3xl font-semibold">Blog Post: {slug}</h1>
    </div>
  )
}
