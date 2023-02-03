declare module 'astro:content' {
	export { z } from 'astro/zod';
	export type CollectionEntry<C extends keyof typeof entryMap> =
		(typeof entryMap)[C][keyof (typeof entryMap)[C]] & Render;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<
				import('astro/zod').AnyZodObject,
				import('astro/zod').AnyZodObject
		  >;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	type BaseCollectionConfig<S extends BaseSchema> = {
		schema?: S;
		slug?: (entry: {
			id: CollectionEntry<keyof typeof entryMap>['id'];
			defaultSlug: string;
			collection: string;
			body: string;
			data: import('astro/zod').infer<S>;
		}) => string | Promise<string>;
	};
	export function defineCollection<S extends BaseSchema>(
		input: BaseCollectionConfig<S>
	): BaseCollectionConfig<S>;

	type EntryMapKeys = keyof typeof entryMap;
	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidEntrySlug<C extends EntryMapKeys> = AllValuesOf<(typeof entryMap)[C]>['slug'];

	export function getEntryBySlug<
		C extends keyof typeof entryMap,
		E extends ValidEntrySlug<C> | (string & {})
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getCollection<C extends keyof typeof entryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof typeof entryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	type InferEntrySchema<C extends keyof typeof entryMap> = import('astro/zod').infer<
		Required<ContentConfig['collections'][C]>['schema']
	>;

	type Render = {
		render(): Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	};

	const entryMap: {
		"blocks": {
"1.mdx": {
  id: "1.mdx",
  slug: "1",
  body: string,
  collection: "blocks",
  data: any
},
"2.mdx": {
  id: "2.mdx",
  slug: "2",
  body: string,
  collection: "blocks",
  data: any
},
},
"clients": {
"aa-cars.md": {
  id: "aa-cars.md",
  slug: "aa-cars",
  body: string,
  collection: "clients",
  data: any
},
"abc.md": {
  id: "abc.md",
  slug: "abc",
  body: string,
  collection: "clients",
  data: any
},
"ap.md": {
  id: "ap.md",
  slug: "ap",
  body: string,
  collection: "clients",
  data: any
},
"axa-health.md": {
  id: "axa-health.md",
  slug: "axa-health",
  body: string,
  collection: "clients",
  data: any
},
"bauer-media.md": {
  id: "bauer-media.md",
  slug: "bauer-media",
  body: string,
  collection: "clients",
  data: any
},
"bbc.md": {
  id: "bbc.md",
  slug: "bbc",
  body: string,
  collection: "clients",
  data: any
},
"bfi.md": {
  id: "bfi.md",
  slug: "bfi",
  body: string,
  collection: "clients",
  data: any
},
"bt-sport.md": {
  id: "bt-sport.md",
  slug: "bt-sport",
  body: string,
  collection: "clients",
  data: any
},
"collinson.md": {
  id: "collinson.md",
  slug: "collinson",
  body: string,
  collection: "clients",
  data: any
},
"consumer.md": {
  id: "consumer.md",
  slug: "consumer",
  body: string,
  collection: "clients",
  data: any
},
"dk.md": {
  id: "dk.md",
  slug: "dk",
  body: string,
  collection: "clients",
  data: any
},
"experian.md": {
  id: "experian.md",
  slug: "experian",
  body: string,
  collection: "clients",
  data: any
},
"fscs.md": {
  id: "fscs.md",
  slug: "fscs",
  body: string,
  collection: "clients",
  data: any
},
"good-food-guide.md": {
  id: "good-food-guide.md",
  slug: "good-food-guide",
  body: string,
  collection: "clients",
  data: any
},
"hearst.md": {
  id: "hearst.md",
  slug: "hearst",
  body: string,
  collection: "clients",
  data: any
},
"homes-communities-agency.md": {
  id: "homes-communities-agency.md",
  slug: "homes-communities-agency",
  body: string,
  collection: "clients",
  data: any
},
"jato.md": {
  id: "jato.md",
  slug: "jato",
  body: string,
  collection: "clients",
  data: any
},
"lexis-nexis.md": {
  id: "lexis-nexis.md",
  slug: "lexis-nexis",
  body: string,
  collection: "clients",
  data: any
},
"lloyds.md": {
  id: "lloyds.md",
  slug: "lloyds",
  body: string,
  collection: "clients",
  data: any
},
"met-service.md": {
  id: "met-service.md",
  slug: "met-service",
  body: string,
  collection: "clients",
  data: any
},
"news-corp.md": {
  id: "news-corp.md",
  slug: "news-corp",
  body: string,
  collection: "clients",
  data: any
},
"nhs.md": {
  id: "nhs.md",
  slug: "nhs",
  body: string,
  collection: "clients",
  data: any
},
"nzz.md": {
  id: "nzz.md",
  slug: "nzz",
  body: string,
  collection: "clients",
  data: any
},
"penguin-random-house.md": {
  id: "penguin-random-house.md",
  slug: "penguin-random-house",
  body: string,
  collection: "clients",
  data: any
},
"publica.md": {
  id: "publica.md",
  slug: "publica",
  body: string,
  collection: "clients",
  data: any
},
"rothamsted-research.md": {
  id: "rothamsted-research.md",
  slug: "rothamsted-research",
  body: string,
  collection: "clients",
  data: any
},
"sky-news.md": {
  id: "sky-news.md",
  slug: "sky-news",
  body: string,
  collection: "clients",
  data: any
},
"sntv.md": {
  id: "sntv.md",
  slug: "sntv",
  body: string,
  collection: "clients",
  data: any
},
"sp-global-platts.md": {
  id: "sp-global-platts.md",
  slug: "sp-global-platts",
  body: string,
  collection: "clients",
  data: any
},
"spotlight.md": {
  id: "spotlight.md",
  slug: "spotlight",
  body: string,
  collection: "clients",
  data: any
},
"telstra.md": {
  id: "telstra.md",
  slug: "telstra",
  body: string,
  collection: "clients",
  data: any
},
"the-new-zealand-herald.md": {
  id: "the-new-zealand-herald.md",
  slug: "the-new-zealand-herald",
  body: string,
  collection: "clients",
  data: any
},
"the-telegraph.md": {
  id: "the-telegraph.md",
  slug: "the-telegraph",
  body: string,
  collection: "clients",
  data: any
},
"times-sunday-times.md": {
  id: "times-sunday-times.md",
  slug: "times-sunday-times",
  body: string,
  collection: "clients",
  data: any
},
"travel-republic.md": {
  id: "travel-republic.md",
  slug: "travel-republic",
  body: string,
  collection: "clients",
  data: any
},
},
"manifesto": {
"01.mdx": {
  id: "01.mdx",
  slug: "01",
  body: string,
  collection: "manifesto",
  data: any
},
"02.mdx": {
  id: "02.mdx",
  slug: "02",
  body: string,
  collection: "manifesto",
  data: any
},
"03.mdx": {
  id: "03.mdx",
  slug: "03",
  body: string,
  collection: "manifesto",
  data: any
},
"04.mdx": {
  id: "04.mdx",
  slug: "04",
  body: string,
  collection: "manifesto",
  data: any
},
"05.mdx": {
  id: "05.mdx",
  slug: "05",
  body: string,
  collection: "manifesto",
  data: any
},
"06.mdx": {
  id: "06.mdx",
  slug: "06",
  body: string,
  collection: "manifesto",
  data: any
},
"07.mdx": {
  id: "07.mdx",
  slug: "07",
  body: string,
  collection: "manifesto",
  data: any
},
"08.mdx": {
  id: "08.mdx",
  slug: "08",
  body: string,
  collection: "manifesto",
  data: any
},
"09.mdx": {
  id: "09.mdx",
  slug: "09",
  body: string,
  collection: "manifesto",
  data: any
},
"10.mdx": {
  id: "10.mdx",
  slug: "10",
  body: string,
  collection: "manifesto",
  data: any
},
},
"pages": {
"404.mdx": {
  id: "404.mdx",
  slug: "404",
  body: string,
  collection: "pages",
  data: any
},
"about.mdx": {
  id: "about.mdx",
  slug: "about",
  body: string,
  collection: "pages",
  data: any
},
"business-engines.mdx": {
  id: "business-engines.mdx",
  slug: "business-engines",
  body: string,
  collection: "pages",
  data: any
},
"foo.mdx": {
  id: "foo.mdx",
  slug: "foo",
  body: string,
  collection: "pages",
  data: any
},
"futurestate-design.mdx": {
  id: "futurestate-design.mdx",
  slug: "futurestate-design",
  body: string,
  collection: "pages",
  data: any
},
"futurestate-manifesto.mdx": {
  id: "futurestate-manifesto.mdx",
  slug: "futurestate-manifesto",
  body: string,
  collection: "pages",
  data: any
},
"work.mdx": {
  id: "work.mdx",
  slug: "work",
  body: string,
  collection: "pages",
  data: any
},
},
"podcasts": {
"4.mdx": {
  id: "4.mdx",
  slug: "4",
  body: string,
  collection: "podcasts",
  data: any
},
"6.mdx": {
  id: "6.mdx",
  slug: "6",
  body: string,
  collection: "podcasts",
  data: any
},
},
"testimonials": {
"1.mdx": {
  id: "1.mdx",
  slug: "1",
  body: string,
  collection: "testimonials",
  data: any
},
},

	};

	type ContentConfig = never;
}
