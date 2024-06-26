import {
  Divider,
  NumberInput,
  Select,
  SelectItem,
  TextInput,
} from "@tremor/react";
import PropertyPlacementRadioButtons from "./PropertyPlacementRadioButtons";
import {
  CURRENCIES,
  HEATING_TYPES,
  INTERIOR_TYPES,
  LISTING_TYPES,
  PROPERTY_TYPES,
  UPKEEP_TYPES,
} from "../../lib/constants";
import SingleSelectRadioButton from "./SingleSelectRadioButton";
import { PlacingPropertyImagesHandler } from "@/app/components/propertyPlacementEdit/PlacingPropertyImagesHandler";
import React from "react";
import { FormikProps } from "formik";

interface CreatePropertyComponentPropInterface {
  formik: FormikProps<any>;
}

function EditableConfirmationPage({
  formik,
}: CreatePropertyComponentPropInterface) {
  return (
    <>
      <Divider />
      <div className="detail_single_box">
        <div className="flex justify-between">
          <p className={"font-bold text-lg mb-2"}>Renting or Selling</p>
          {/* <Icon icon={PencilSquareIcon} /> */}
        </div>
        <div className="max-w-lg">
          <PropertyPlacementRadioButtons
            value={formik.values.listingType}
            options={LISTING_TYPES}
            onChange={(e) => formik.setFieldValue("listingType", e, true)}
            id="listingType"
          />
        </div>
      </div>
      <Divider />
      <div className="detail_single_box flex gap-2 flex-col">
        <div className="flex justify-between">
          <p className={"font-bold text-lg mb-2"}>Property type</p>
          {/* <Icon icon={PencilSquareIcon} /> */}
        </div>
        <div className="max-w-lg">
          <Select
            // defaultValue={formik.values.propertyType}
            value={formik.values.propertyType}
            id="propertyType"
            onChange={(e) => formik.setFieldValue("propertyType", e, true)}
            onBlur={formik.handleBlur}
          >
            {PROPERTY_TYPES.map((item, index) => (
              <SelectItem value={item} key={index}>
                {item}
              </SelectItem>
            ))}
          </Select>
        </div>
      </div>
      <Divider />
      <div className="detail_single_box">
        <div className="flex justify-between">
          <p className={"font-bold text-lg mb-2"}>Address</p>
        </div>
        <p className="font-bold text-sm mt-4 mb-2 ">House Number</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="streetNumber"
          name="streetNumber"
          value={formik.values.streetNumber}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2  font-bold text-sm">Street</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="route"
          name="route"
          value={formik.values.route}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2 font-bold text-sm">City</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="locality"
          name="locality"
          value={formik.values.locality}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2 font-bold text-sm">Administrative area</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="administrativeArea"
          name="administrativeArea"
          value={formik.values.administrativeArea}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2 font-bold text-sm">Postal Code</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="postalCode"
          name="postalCode"
          value={formik.values.postalCode}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2 font-bold text-sm">Latitude</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="latitude"
          name="latitude"
          value={formik.values.latitude}
          onChange={formik.handleChange}
        />
        <p className="mt-4 mb-2 font-bold text-sm">Longitude</p>
        <TextInput
          className="bg-transparent  shadow-none max-w-lg"
          id="longitude"
          name="longitude"
          value={formik.values.longitude}
          onChange={formik.handleChange}
        />
      </div>
      <Divider />
      <div className="detail_single_box flex gap-4 flex-col">
        <div className="flex justify-between">
          <p className={"font-bold text-lg mb-2"}>Asking Price</p>
        </div>
        <div className="flex gap-2 flex-col">
          <p className={"mb-2 font-bold text-sm"}>Select the currency</p>
          <div className="max-w-sm">
            <Select
              id="currency"
              onChange={(e) => formik.setFieldValue("currency", e, true)}
              className={"text-sm"}
              value={formik.values.currency}
            >
              {CURRENCIES.map((item, index) => (
                <SelectItem value={item} key={index}>
                  {item}
                </SelectItem>
              ))}
            </Select>
          </div>
        </div>

        <div className="flex gap-2 flex-col">
          <p className={"mb-2 font-bold text-sm"}>Type your price</p>
          <NumberInput
            className="max-w-sm"
            name="price"
            min={0}
            id="price"
            onValueChange={(e) => formik.setFieldValue("price", e, true)}
            value={formik.values.price}
            onBlur={formik.handleBlur}
            error={!!formik.errors.price && !!formik.touched.price}
          />
        </div>
      </div>
      <Divider />
      {formik.values.propertyType !== "LAND" && (
        <div className="detail_single_box flex gap-4 flex-col">
          <div>
            <p className={"font-bold text-lg mb-2"}>
              General information about the property
            </p>
          </div>
          <div className="flex gap-1 flex-col">
            <span className="mb-2 font-bold text-sm">Rooms</span>
            <NumberInput
              className={"w-min"}
              name="rooms"
              id="rooms"
              min={0}
              onValueChange={(e) => formik.setFieldValue("rooms", e, true)}
              onBlur={formik.handleBlur}
              error={Boolean(formik.touched.rooms && formik.errors.rooms)}
              value={formik.values.rooms}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="mb-2 font-bold text-sm">Bedrooms</span>
            <NumberInput
              className={"w-min"}
              name="bedrooms"
              min={0}
              id="bedrooms"
              onValueChange={(e) => formik.setFieldValue("bedrooms", e, true)}
              error={Boolean(formik.touched.bedrooms && formik.errors.bedrooms)}
              value={formik.values.bedrooms}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="mb-2 font-bold text-sm">Bathrooms</span>
            <NumberInput
              className={"w-min"}
              name="bathrooms"
              min={0}
              id="bathrooms"
              onValueChange={(e) => formik.setFieldValue("bathrooms", e, true)}
              error={Boolean(
                formik.touched.bathrooms && formik.errors.bathrooms,
              )}
              value={formik.values.bathrooms}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className="flex gap-1 flex-col">
            <span className="mb-2 font-bold text-sm">Parking places</span>
            <NumberInput
              className={"w-min"}
              name="parking"
              min={0}
              id="parking"
              onValueChange={(e) => formik.setFieldValue("parking", e, true)}
              error={Boolean(
                formik.touched.parking && formik.errors.parking,
              )}
              value={formik.values.parking}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
      )}
      <Divider />
      <div className="detail_single_box flex gap-4 flex-col">
        <div className="flex justify-between">
          <p className={"font-bold text-lg mb-2"}>Property dimentions</p>
        </div>
        <div className="flex gap-1 flex-col">
          <span className="mb-2 font-bold text-sm">Total area</span>
          <div className="flex items-center gap-2">
            <NumberInput
              placeholder="0"
              enableStepper={false}
              className={"w-min border-[#97B6FF]"}
              min={0}
              name="totalArea"
              id="totalArea"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={!!formik.touched.totalArea && !!formik.errors.totalArea}
              value={formik.values.totalArea}
            />
            m2
          </div>
        </div>
        {formik.values.propertyType !== "LAND" && (
          <>
            <div className="flex gap-1 flex-col">
              <span className="mb-2 font-bold text-sm">Living area</span>
              <div className="flex items-center gap-2">
                <NumberInput
                  placeholder="0"
                  enableStepper={false}
                  className={"w-min border-[#97B6FF]"}
                  min={0}
                  name="livingArea"
                  id="livingArea"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!formik.touched.livingArea && !!formik.errors.livingArea
                  }
                  value={formik.values.livingArea}
                />
                m2
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <span className="mb-2 font-bold text-sm">Outside area</span>
              <div className="flex items-center gap-2">
                <NumberInput
                  enableStepper={false}
                  placeholder="0"
                  className={"w-min border-[#97B6FF]"}
                  name="areaOutside"
                  id="areaOutside"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    !!formik.touched.areaOutside && !!formik.errors.areaOutside
                  }
                  value={formik.values.areaOutside}
                />
                m2
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <span className="mb-2 font-bold text-sm">Garage</span>
              <div className="flex items-center gap-2">
                <NumberInput
                  enableStepper={false}
                  placeholder="0"
                  className={"w-min border-[#97B6FF]"}
                  name="areaGarage"
                  id="areaGarage"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!formik.touched.areaGarage && !!formik.errors.areaGarage}
                  value={formik.values.garage}
                />
                m2
              </div>
            </div>
            <div className="flex gap-1 flex-col">
              <span className="mb-2 font-bold text-sm">Volume</span>
              <div className="flex items-center gap-2">
                <NumberInput
                  enableStepper={false}
                  placeholder="0"
                  className={"w-min border-[#97B6FF]"}
                  name="volume"
                  id="volume"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={!!formik.touched.volume && !!formik.errors.volume}
                  value={formik.values.volume}
                />
                m3
              </div>
            </div>
          </>
        )}
      </div>
      <Divider />
      {formik.values.propertyType !== "LAND" && (
        <>
          <div className="detail_single_box flex gap-2 flex-col">
            <div className="flex justify-between">
              <p className={"font-bold text-lg mb-2"}>Interior type</p>
              {/* <Icon icon={PencilSquareIcon} /> */}
            </div>
            <div className="max-w-lg">
              <SingleSelectRadioButton
                onBlur={formik.handleBlur}
                value={formik.values.interiorType}
                options={INTERIOR_TYPES}
                onChange={(e) => formik.setFieldValue("interiorType", e, true)}
                id="interiorType"
              />
              {formik.errors.interiorType ? <p>error</p> : null}
            </div>
          </div>
          <Divider />
          <div className="detail_single_box flex gap-2 flex-col">
            <div className="flex justify-between">
              <p className={"font-bold text-lg mb-2"}>Property condition</p>
              {/* <Icon icon={PencilSquareIcon} /> */}
            </div>
            <div className="max-w-lg">
              <SingleSelectRadioButton
                value={formik.values.upkeepType}
                options={UPKEEP_TYPES}
                onChange={(e) => formik.setFieldValue("upkeepType", e, true)}
                id="upkeepType"
              />
            </div>
          </div>
          <Divider />
          <div className="detail_single_box flex gap-2 flex-col">
            <div className="flex justify-between">
              <p className={"font-bold text-lg mb-2"}>Heating type</p>
              {/* <Icon icon={PencilSquareIcon} /> */}
            </div>
            <div className="max-w-lg">
              <SingleSelectRadioButton
                value={formik.values.heatingType}
                options={HEATING_TYPES}
                onChange={(e) => formik.setFieldValue("heatingType", e, true)}
                id="heatingType"
              />
            </div>
          </div>
          <Divider />
          <div className="detail_single_box flex flex-col gap-4">
            <div>
              <p className={"font-bold text-lg mb-2"}>
                Building specifications
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <span className="mb-2 font-bold text-sm">Year of built</span>
              <NumberInput
                className={"w-min border-[#97B6FF]"}
                min={2010}
                max={2040}
                onBlur={formik.handleBlur}
                name="constructedYear"
                id="constructedYear"
                onValueChange={(e) =>
                  formik.setFieldValue("constructedYear", e, true)
                }
                error={Boolean(
                  formik.touched.constructedYear && formik.errors.constructedYear,
                )}
                value={formik.values.constructedYear}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="mb-2  font-bold text-sm">
                Floors in the building
              </span>
              <NumberInput
                className={"w-min border-[#97B6FF]"}
                name="numberOfFloorsCommon"
                min={0}
                id="numberOfFloorsCommon"
                onBlur={formik.handleBlur}
                onValueChange={(e) =>
                  formik.setFieldValue("numberOfFloorsCommon", e, true)
                }
                error={Boolean(
                  formik.touched.numberOfFloorsCommon &&
                    formik.errors.numberOfFloorsCommon,
                )}
                value={formik.values.numberOfFloorsCommon}
              />
            </div>
            <div className="flex flex-col gap-1">
              <span className="mb-2 font-bold text-sm">
                Apartment located at floor number
              </span>
              <NumberInput
                className={"w-min border-[#97B6FF]"}
                name="floorNumber"
                min={0}
                id="floorNumber"
                onValueChange={(e) =>
                  formik.setFieldValue("floorNumber", e, true)
                }
                onBlur={formik.handleBlur}
                error={Boolean(
                  formik.touched.floorNumber && formik.errors.floorNumber,
                )}
                value={formik.values.floorNumber}
              />
            </div>
          </div>
          <Divider />
        </>
      )}
      <Divider />
      <div className="detail_single_box">
        <div className="flex justify-between">
          <p className={"font-bold text-[18px]  mb-2"}>Images</p>
        </div>
        <div className={"max-w-[500px]"}>
          <PlacingPropertyImagesHandler
            initialImages={formik.values.images || []}
            onChange={(images) => formik.setFieldValue("images", images, true)}
          />
        </div>
      </div>
      <Divider />
      <div className="detail_single_box flex flex-col gap-6">
        <p className={"font-bold text-lg mb-2"}>Property description</p>
        {/* <Icon icon={PencilSquareIcon} /> */}

        <div className=" flex flex-col gap-4">
          <span className="font-bold text-lg">Description</span>

          <textarea
            name="description"
            id="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            placeholder="Type your description here"
            className={
              "border-2 border-[#97B6FF] rounded-md max-w-lg  outline-0 h-48 max-h-64 min-h-fit  p-3 text-gray-500 text-md"
            }
          />
        </div>
        <Divider />
        <div></div>
      </div>
    </>
  );
}

export default EditableConfirmationPage;
